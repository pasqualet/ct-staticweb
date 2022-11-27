import * as pulumi from "@pulumi/pulumi";
import * as ct from "@cloudtoolkit/aws";

const config = new pulumi.Config();
const domain = config.require("domain");
const staticweb = new ct.serverless.StaticWeb(domain, {
  domain: domain,
  configureDNS: true,
});
